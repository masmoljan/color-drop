import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from '../CSS/ColorList.module.css'


const ColorList = ({ colors, buttonColor }) => {

	return (
		<DragDropContext onDragEnd={(param) =>{
			const srcIndex = param.source.index;
			const destIndex = param.destination?.index;
			colors.splice(destIndex, 0, colors.splice(srcIndex, 1)[0]);
		}}>
			<Droppable droppableId="colorList">
				{(provided) => (
					<ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyleType: "none" }}>
						{colors.map((color, index) => (
							<Draggable key={color.id} draggableId={color.id} index={index}>
								{(provided) => (
									<li 
										id={color.id_s} 
										ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
									>
										<h4 
											style={{color: color.hex}}
											className={(color.hex !== buttonColor) ? styles.listItem : styles.listItemBolded}
										>
										{color.hex}
										</h4>
									</li>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	)
}

ColorList.propTypes = {
	colors: PropTypes.array,
	buttonColor: PropTypes.string
}

export default ColorList;
