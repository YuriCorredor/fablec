import { useFormik } from "formik"
import Input from "./Input"
import { ImManWoman } from "react-icons/im"
import { IoMdMailUnread } from "react-icons/io"
import { useState } from "react"
import * as yup from "yup"

const contactSchema = yup.object().shape({
    name: yup.string().required("Necessário").min(4, "O nome não pode ter menos de 4 letras").max(20, "O nome não pode ter mais de 20 letras"),
    email: yup.string().email("Precisa ser um email válido").required("Necessário"),
    content: yup.string(),
    file: yup.string()
})

export default function Contact() {

    const [fileName, setFileName] = useState("")

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            content: "",
            file: ""
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const handleFileChange = e => {
        const filePath = e.target.value
        const splited = filePath.split("\\")
        setFileName(splited[splited.length - 1])
    }

    return (
        <div className="flex w-full justify-center">
            <div id='contact' className="flex py-24 pb-12 max-w-6xl flex-col md:flex-row">
                <div>
                    <h1 className="text-[#2d3748] text-3xl font-medium p-8 pb-3 pt-0 text-left">Quer receber ofertas incríveis? Faça o seu orçamento agora mesmo.</h1>
                    <p className="text-[#718096] text-lg font-medium p-8 pt-0 text-left">Entre em contato conosco e nos ajude com sua recomendação. A sua satisfação é a nossa meta.</p>
                </div>
                <div className="flex flex-col sm:min-w-[50%] border-2 items-center p-2 pb-0 mx-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-200">
                    <div className="flex hover:scale-110 m-2 transition-all duration-300 cursor-pointer">
                        <ImManWoman color="#446c44" size={100} />
                        <IoMdMailUnread className="z-10 ml-[-30px] mt-[20px]" color="#0fcc7d" size={100} />
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex w-full p-5 pt-0 pb-3 flex-col items-center">
                        <Input 
                            name="Nome"
                            id="name"
                            type="text"
                            placeholder="John C. Whethy"
                            condition={formik.touched.name && formik.errors.name}
                            errorMessage={formik.errors.name}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <Input 
                            name="Email"
                            id="email"
                            type="email"
                            placeholder="examplo@email.com"
                            condition={formik.touched.email && formik.errors.email}
                            errorMessage={formik.errors.email}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <p className={`text-sm text-[#2d3748]  p-2 pb-1 pl-0 place-self-start`}>Mensagem</p>
                        <textarea
                            className="scrollbar w-full h-[95px] p-2 m-2 mt-0 outline-none border-2 rounded-md focus:shadow-lg focus:border-[#0fcc7d]"
                            id="content"
                            placeholder="Preço de toner para impressora LASER JET PRO."
                            value={formik.values.content}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <div className="flex w-full flex-col sm:flex-row">
                            <label 
                                className="place-self-start text-center min-w-fit text-[#2d3748] font-semibold mb-0 scale-100 p-4 py-2 bg-[#42ec9a] hover:shadow-2xl hover:scale-110 hover:bg-[#0fcc7d] transition-all rounded-full cursor-pointer" 
                                htmlFor="file"
                            >
                                Escolher arquivo
                            </label>
                            <p className="pl-2 text-sm font-semibold text-[#2d3748] max-w-[100px] max-h-[40px] overflow-hidden">{fileName}</p>
                            <input
                                className="hidden"
                                id="file"
                                type="file" 
                                value={formik.values.file}
                                onBlur={formik.handleBlur}
                                onChange={e => {
                                    formik.handleChange(e)
                                    handleFileChange(e)
                                }}
                            />
                        </div>
                        <input 
                            className="place-self-start text-center text-[#2d3748] m-5 ml-0 mb-0 scale-100 p-4 px-12 sm:px-18 bg-[#42ec9a] hover:shadow-2xl hover:scale-110 hover:bg-[#0fcc7d] transition-all font-bold rounded-full text-base sm:text-xl cursor-pointer" 
                            type="submit" 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
