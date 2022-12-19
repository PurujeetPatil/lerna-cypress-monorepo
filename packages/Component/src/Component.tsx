import React from "react";

type Props = {
	broCode?: string;
};

function Component({ broCode }: Props) {
	if (broCode) {
		return <h1>{broCode}</h1>;
	} else {
		return <div>You aint a bro</div>;
	}
}

export default Component;
