import React from "react"
import OddajRzeczyHeader from "./OddajRzeczyHeader";
import OddajRzeczyForm from "./OddajRzeczyForm";
import Form from "./Form";
import NavLogin from "./NavLogin";

const OddajRzeczy = () => {
    return (
        <>
            <NavLogin />
            <OddajRzeczyHeader />
            <OddajRzeczyForm />
            <Form />
        </>
    )
}

export default OddajRzeczy;