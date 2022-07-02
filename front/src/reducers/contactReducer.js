import { CONTACT, SHOW_FLASH } from "../actions/contact";

const initialState = {
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    entreprise: "",
    objet: "",
    message: "",
    flash: null,
};

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case CONTACT:
            switch (action.identifier) {
                case "nom":
                    return {
                        ...state,
                        nom: action.newvalue,
                    };
                case "prenom":
                    return {
                        ...state,
                        prenom: action.newvalue,
                    };
                case "telephone":
                    return {
                        ...state,
                        telephone: action.newvalue,
                    };
                case "email":
                    return {
                        ...state,
                        email: action.newvalue,
                    };
                case "entreprise":
                    return {
                        ...state,
                        entreprise: action.newvalue,
                    };
                case "objet":
                    return {
                        ...state,
                        objet: action.newvalue,
                    };
                case "message":
                    return {
                        ...state,
                        message: action.newvalue,
                    };
                default:
                    return state;

            }

        case SHOW_FLASH:
            return {
                ...state,
                nom: "",
                prenom: "",
                telephone: "",
                email: "",
                entreprise: "",
                objet: "",
                message: "",
                flash: action.newvalue,
            };
        default:
            return state;
    }
}

export default contactReducer;