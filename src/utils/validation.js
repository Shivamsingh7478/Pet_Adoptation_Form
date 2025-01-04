export const Validation = (name, value, errors) => {
    switch (name) 
    {
        case "petName":
            errors.petName = value.length < 3 ? "pet name must be of 3 characters" : "";
            break ;

        case "breed":
            errors.breed =
                value.length < 3 ? "Breed must be at least 3 characters" : "";
            break;
        case "adopterName":
            errors.adopterName =
                value.length < 3 ? "Your Name must be at least 3 characters" : "";
            break;  


            case "email":
            errors.email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim())
                ? ""
                : "Invalid email address";
            break;

        case "phone":
            errors.phone = /^\d{10}$/.test(value.trim()) ? "" : "Please enter a valid 10-digit phone number";

            break;
        
    
        default:
            break;
    }

    return errors;
};