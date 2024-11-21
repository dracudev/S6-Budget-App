import { CustomCard } from "../../components/CustomCard";
import { StandardButton } from "../../components/StandardButton";
import "./ClientDataForm.css";
import Form from "react-bootstrap/Form"

export function ClientDataForm() {
  return (
    <div className=" data-container">
      <CustomCard className="container">
        <Form className="form-data">
          <div className="data-inputs">
            <label>
              <input type="text" placeholder="Name" required />
            </label>
            <label>
              <input type="tel" placeholder="Telephone" required />
            </label>
            <label>
              <input type="email" placeholder="Email" required />
            </label>
          </div>

          <div className="data-button">
            <StandardButton className="text-nowrap" type="submit">
              Request budget
            </StandardButton>
          </div>
        </Form>
      </CustomCard>
    </div>
  );
}
