import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp(){

const{mutate:signup,isLoading} =useMutation({
    mutationFn:signupApi,
      onSucess:(user)=>{

    toast.success('Account successfully created ! Please verify the email address')
      }
})
return{signup,isLoading}
}