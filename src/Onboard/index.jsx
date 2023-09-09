import "./index.css";
import { Link } from "react-router-dom";

const AddIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="25"
		viewBox="0 0 45 45">
		<path
			id="Icon_ionic-ios-add"
			data-name="Icon ionic-ios-add"
			d="M51.163,28.663h-16.9v-16.9a2.8,2.8,0,1,0-5.6,0v16.9h-16.9a2.8,2.8,0,0,0,0,5.6h16.9v16.9a2.8,2.8,0,0,0,5.6,0v-16.9h16.9a2.8,2.8,0,0,0,0-5.6Z"
			transform="translate(-8.965 -8.965)"
		/>
	</svg>
);

const OnBoard = () => (
	<div className="onboard-bg">
		<div className="inner-div">
			<Link to="/onboarded/adding-form">
				<div className="add-icon-div">
					<AddIcon />
				</div>
			</Link>
		</div>

		<p>Add Device</p>
	</div>
);

export default OnBoard;
