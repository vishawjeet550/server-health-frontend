import { useState } from "react"
import Logo from "../../common/Logo"
import Button from "../../common/semantic_tags/Button"
import Form from "../../common/semantic_tags/Form"
import Heading3 from "../../common/semantic_tags/Heading3"
import Heading5 from "../../common/semantic_tags/Heading5"
import Hr from "../../common/semantic_tags/Hr"
import Input from "../../common/semantic_tags/Input"
import Span from "../../common/semantic_tags/Span"
import { useDispatch } from "react-redux"
import { fetchGlobalData } from "../../api/global/global.api"

type TLogin = {
    email: string;
    password: string;
}

const Signin = () => {
  const dispatch = useDispatch()
  const [loginDetails, setLoginDetails] = useState<TLogin>({
    email: '',
    password: ''
  })

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchGlobalData(loginDetails))
  }

  const changeHandler = (type: string, value: string) => {
    setLoginDetails({ ...loginDetails, [type]: value })
  }

  return (
    <section className="auth-signin-wrapper m-10 p-4 max-h-[80vh]">
        <aside className="flex gap-4 mx-auto items-center">
            <div className="w-[50%] pl-20">
                <Logo className="!justify-start" />
                <div className="mt-8">
                    <Heading3 className="font-bold text-4xl">Welcome Back</Heading3>
                    <Heading5 className="text-md mt-2">Enter your email and password to sign in</Heading5>
                    <Form className="mt-8 w-[50%]" handleSubmit={() => {}}>
                        <Input placeholder="Enter your email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler('email', e.target.value)} value={loginDetails.email} className="mb-2" />
                        <Input placeholder="Enter your password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler('password', e.target.value)} value={loginDetails.password} className="mb-2" />
                        <Button type="submit" className="text-white mt-4" clickHandler={submitHandler}>Sign In</Button>
                        <Hr className="mt-20" />
                    </Form>

                    <Heading5 className="text-sm mt-8">Don't have an Account? <Span className="font-bold">Register Now</Span></Heading5>
                </div>
            </div>
            <div className="w-[50%] h-[90vh]">
                <img src='https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/curved6.jpg' className="h-full aspect-[3/3] object-cover rounded-lg" />
            </div>
        </aside>
    </section>
  )
}

export default Signin