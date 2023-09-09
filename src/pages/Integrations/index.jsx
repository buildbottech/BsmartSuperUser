import Jira from "../assets/jira.png";
import Salesforce from "../assets/salesforce.png";
import Workbench from "../assets/workbench.png";
import Ibmlogo from "../assets/IBMLogo.png";

import "./index.css";
function Integrations() {
	return (
		<div className="integration_bg">
			<p className="para">select the platform</p>
			<div className="image_cont">
				<img src={Ibmlogo} className="img" />
				<img src={Jira} className="img img_white" />
				<img src={Workbench} className="img" />
				<img src={Salesforce} className="img img_white" />
			</div>
		</div>
	);
}
export default Integrations;
