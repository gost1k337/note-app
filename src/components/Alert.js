import React, { useContext } from 'react'
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from 'react-transition-group'

const Alert = () => {

	const { alert, hide } = useContext(AlertContext)

	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350
			}}
			classNames={'alert'}
			mountOnEnter
			unmountOnExit
		>
			<div className={`alert alert-${ alert.type || 'warning' } alert-dismissible fade show`}>
				<strong style={{marginRight: '1rem'}}>Warning!</strong>
				{ alert.text }
				<button onClick={hide} className="close" type="button" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</CSSTransition>
	)
}

export default Alert
