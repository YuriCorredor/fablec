import { useFormik } from "formik"
import { ImManWoman } from "react-icons/im"
import { IoMdMailUnread } from "react-icons/io"
import * as yup from "yup"

const contactSchema = yup.object().shape({
    name: yup.string().required("Necessário").max(20, "O nome não pode ter mais de 20 letras"),
    email: yup.string().email("Precisa ser um email válido").required("Necessário"),
    content: yup.string(),
    file: yup.string()
})

export default function Contact() {

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

    return (
        <div id='contact' className="flex mt-8 justify-center">
            <div className="flex flex-col max-w-[450px] border-2 items-center mb-4 p-2 mx-4 rounded-xl shadow-2xl transition-all duration-150">
                <div className="flex hover:scale-110 m-2 transition-all cursor-pointer">
                    <ImManWoman className="" color="#446c44" size={100} />
                    <IoMdMailUnread className="z-10 ml-[-30px] mt-[20px]" color="#0fcc7d" size={100} />
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
                    <input
                        className={`outline-none w-60 p-2 m-2 border-2 rounded-md focus:shadow-lg ${formik.touched.name && formik.errors.name ? 'border-red-600 mb-0' : 'focus:border-[#0fcc7d]'}`}
                        id="name"
                        type="text"
                        autoComplete="on"
                        placeholder="John C. Whethy"
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? <p className="text-red-600 text-sm font-thin mb-2">{formik.errors.name}</p> : null}
                    <input
                        className={`outline-none w-60 p-2 m-2 border-2 rounded-md focus:shadow-lg ${formik.touched.email && formik.errors.email ? 'border-red-600 mb-0' : 'focus:border-[#0fcc7d]'}`}
                        id="email"
                        type="email"
                        autoComplete="on"
                        placeholder="examplo@email.com"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <p className="text-red-600 text-sm font-thin mb-2">{formik.errors.email}</p> : null}
                    <textarea
                        className="scrollbar w-60 h-[95px] p-2 m-2 outline-none border-2 rounded-md focus:shadow-lg focus:border-[#0fcc7d]"
                        id="content"
                        placeholder="Preço de toner para impressora LASER JET PRO MFP M428 FDW."
                        value={formik.values.content}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <label 
                        className="text-center text-[#2d3748] m-5 mb-0 scale-100 p-4 px-12 sm:px-18 bg-[#42ec9a] hover:shadow-2xl hover:scale-110 hover:bg-[#0fcc7d] transition-all font-bold rounded-full text-base sm:text-xl cursor-pointer" 
                        htmlFor="file"
                    >
                        Escolher arquivo
                    </label>
                    <input
                        className="hidden"
                        id="file"
                        type="file" 
                        value={formik.values.file}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <input 
                        className="text-center text-[#2d3748] m-5 scale-100 p-4 px-12 sm:px-18 bg-[#42ec9a] hover:shadow-2xl hover:scale-110 hover:bg-[#0fcc7d] transition-all font-bold rounded-full text-base sm:text-xl cursor-pointer" 
                        type="submit" 
                    />
                </form>
            </div>
        </div>
    )
}
