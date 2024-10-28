import React, { useEffect, useState} from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'


const List = ({token}) => {

  const [list,setList] = useState([])
  

  //Lấy danh sách mín ăn từ database
  const fetchList = async () => {
     try {  
      const response = await axios.get(backendUrl + '/api/food/list')
      if(response.data.success){
        setList(response.data.foods)
      }
      else {
        toast.error(response.data.message)
      }
      
     } catch (error) {
      console.log(error);
      toast.error(error.message)  
     }
  }
   
  const removeFood = async (id) => {
    try {
       
   
      const response = await axios.post(backendUrl + "/api/food/remove/" ,{id}, {headers:{token}})
      if(response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)  
    }
  }
   

  useEffect(() =>{
      fetchList();
  },[])

  return (
    <>
      <p className='mb-2 text-2xl text-center'>Danh sách món ăn</p>
      <div className='flex flex-col gap-2'>

          {/*-----------Danh sach mon an----------*/}

          <div className=' md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Hình ảnh</b>
            <b>Tên món ăn</b>
            <b>Danh mục </b>
            <b className='text-center'>Thao tác</b>
          </div>
           
           {/*-----------Mon an------------- */}

            {
              list.map((item, index) => (
                <div key={index} className='md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-white text-sm'>
                  <img src={item.images[0]}  className='w-20 h-20' />
                  <p>{item.name}</p>
                  <p>{item.category}</p> 
                  <button onClick={()=>{removeFood(item._id)}} className='text-center text-red-700'>Xóa</button> 
                </div>
              ))
            }
      </div>
    </>
  )
   }


export default List