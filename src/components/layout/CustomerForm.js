import { FormCheckout, InputCustomer, LabelTitle } from "../styles/CustomerForm.styles"

const CustomerForm = () => { 
    return (
        <FormCheckout>
            <h3>Customer Details: </h3>
            <LabelTitle htmlFor="fname">First Name</LabelTitle>
            <InputCustomer type="text" name="fName" placeholder="Enter your first name"/>
            <LabelTitle htmlFor="lname">Last Name</LabelTitle>
            <InputCustomer type="text" name="lName" placeholder="Enter your last name"/>
            <LabelTitle htmlFor="email">Email</LabelTitle>
            <InputCustomer type="text" name="email" placeholder="Enter your Email"/>
            <LabelTitle htmlFor="zipcode">Zip Code</LabelTitle>
            <InputCustomer type="text" name="zipcode" placeholder="Enter your ZipCode"/>
            <LabelTitle htmlFor="ordernotes">Order Notes</LabelTitle>
            <InputCustomer type="textarea" name="ordernotes" placeholder="Enter your order notes"/>
        </FormCheckout>
    )
}

export default CustomerForm