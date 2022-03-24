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
            <div className="flex flex-col max-w-[450px] hover:border-2 items-center mb-8 p-2 mx-2 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-150">
                <div className="flex hover:scale-110 m-2 transition-all">
                    <ImManWoman className="" color="#446c44" size={100} />
                    <IoMdMailUnread className="z-10 ml-[-30px] mt-[20px]" color="#0fcc7d" size={100} />
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
                    <input
                        id="name"
                        type="text"
                        autoComplete="on"
                        placeholder="John C. Whethy"
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
                    <input
                        id="email"
                        type="email"
                        autoComplete="on"
                        placeholder="examplo@email.com"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    <textarea
                        id="content"
                        placeholder="Sua mensagem..."
                        value={formik.values.content}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <input
                        id="file"
                        type="file" 
                        value={formik.values.file}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
