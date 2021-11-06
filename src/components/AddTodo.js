import { HStack , Input ,Button , useToast} from '@chakra-ui/react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
function AddTodo({addTodoFn}) {
    const initialWork = ""
    const [work ,setWork] = useState(initialWork)
    const toast = useToast();
    const handleSubmit = (e)=>{
        e.preventDefault();
      
        if(!work){
            toast({
                title : "Empty field",
                status:'error',
                duration:2000,
                isClosable :true
            })
            return ;
        }
        addTodoFn({_id : uuidv4(), body :work})
        setWork(initialWork)
    }
   
    return (
        <form onSubmit = {(e)=>handleSubmit(e)}>
            <HStack m ="4">
                <Input  variant ="filled"  value ={work} placeholder ="Add work"  onChange = {(e)=>setWork(e.target.value)}/>
                <Button px='8'     type ="submit" colorScheme="red"  onClick ={(e)=>handleSubmit(e)} >Add to work</Button>
            </HStack>

        </form>
    )
}

export default AddTodo
