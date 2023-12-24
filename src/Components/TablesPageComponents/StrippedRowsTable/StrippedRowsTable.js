import Table from 'react-bootstrap/Table';
import './StrippedRowsTable.css'
function StrippedRowsTable (){
    return(
        <>
        <div className="StrippedRowsTableContainer BackItemStyle">
            <h4>Table With Stripped Rows</h4>
            <div  className="StrippedRowsTableBody my-4">
            <Table responsive striped  >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Age</th>
                    <th>Start Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Brandon Jacob</td>
                    <td>Designer</td>
                    <td>28</td>
                    <td>2016-05-25</td>
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>Bridie Kessler</td>
                    <td>Developer</td>
                    <td>35</td>
                    <td>2014-12-05</td>
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>Ashleigh Langosh</td>
                    <td>Finance</td>
                    <td>45</td>
                    <td>2011-08-12</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>Angus Grady</td>
                    <td>HR</td>
                    <td>34</td>
                    <td>2012-06-11</td>
                    </tr>

                    <tr>
                    <td>5</td>
                    <td>Raheem Lehner</td>
                    <td>Dynamic Division Officer</td>
                    <td>47	</td>
                    <td>2011-04-19</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
        </>
    )
}
export default StrippedRowsTable