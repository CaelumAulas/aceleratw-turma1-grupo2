export default function useFormValidations()
{
    const valuePattern = { valid: true, text: "" }
    const formValidations = {
        isRequired(msgError) {
            const validate = (data) => {
                if(data.trim().length === 0) return { valid: false, text: msgError }
                return valuePattern
            }

            return validate
        }
    }

    return formValidations
}