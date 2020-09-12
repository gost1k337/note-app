import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Notes = ({ notes, onRemove }) => {
	const styles = {
		note: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		strong: {
			marginRight: '1rem'
		}
	}
	return (
		<TransitionGroup component="ul" className="list-group">
			{ notes.map(note => (
				<CSSTransition
					key={note.id}
					classNames={'note'}
					timeout={800}
				>
					<li
						style={styles.note}
						className="list-group-item"
					>
						<div>
							<strong style={styles.strong}>{note.title}</strong>
							<small>{ new Date().toLocaleString() }</small>
						</div>
						<button onClick={() => onRemove(note.id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
					</li>
				</CSSTransition>
			)) }
		</TransitionGroup>
	)
}

export default Notes
