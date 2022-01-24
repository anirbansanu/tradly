import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState, useRef } from 'react';

const TableList = () => {
   const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

   useEffect(() => {
       fetch('https://www.ag-grid.com/example-assets/row-data.json')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

  const onButtonClick = e => {
      const selectedNodes = gridRef.current.api.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

   return (
       <div className="ag-theme-alpine" style={{height: "80vh", width: 'auto'}}>
          <button onClick={onButtonClick}>Get selected rows</button>
           <AgGridReact
              ref={gridRef}
               rowData={rowData}
              rowSelection="multiple">
               <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
           </AgGridReact>
       </div>
  );
};
export default TableList;