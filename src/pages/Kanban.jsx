// import React, { useState } from 'react'
// import Board , { moveCard } from '@asseinfo/react-kanban'
// import '@asseinfo/react-kanban/dist/styles.css'
// import { Header } from '../components'

// const Kanban = () => {
//   const board = {
//     columns: [
//       {
//         id: 1,
//         title: 'Backlog',
//         cards: [
//           {
//             id: 1,
//             title: 'Add card',
//             description: 'Add capability to add a card in a column'
//           },
//           {
//             id: 2,
//             title: 'Add card',
//             description: 'Add capability to add a card in a column'
//           },
         
//         ]
//       },
//       {
//         id: 2,
//         title: 'Doing',
//         cards: [
//           {
//             id: 3,
//             title: 'Drag-n-drop support',
//             description: 'Move a card between the columns'
//           },
//           {
//             id: 4,
//             title: 'Drag-n-drop support',
//             description: 'Move a card between the columns'
//           },
//           {
//             id: 5,
//             title: 'Drag-n-drop support',
//             description: 'Move a card between the columns'
//           },
//           {
//             id: 6,
//             title: 'Drag-n-drop support',
//             description: 'Move a card between the columns'
//           },
//         ]
//       }
//     ]
//   }

//   const [controlledBoard, setBoard] = useState(board);

//   function handleCardMove(_card, source, destination) {
//     const updatedBoard = moveCard(controlledBoard, source, destination);
//     setBoard(updatedBoard);
//   }
//   return (
//     <div className="bg-white rounded-3xl mb-8 p-2 md:p-10 ">
//       <Header category="Page" title="Kanban"  />
//       <Board onCardDragEnd={handleCardMove} allowRemoveLane
//       allowRenameColumn
//       allowRemoveCard
//       onCardNew={console.log}
//       allowAddCard={{ on: "top" }}
//       onNewCardConfirm={draftCard => ({
//         id: new Date().getTime(),
//         ...draftCard
//       })}
//        initialBoard={board} />
//     </div>
//   )
// }

// export default Kanban

