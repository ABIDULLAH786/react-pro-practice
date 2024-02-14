
import React, {  useState } from 'react'
import Pagination from '../../Pagination/Pagination';

function UserTableFooter({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfRecPerPage] = useState(10);

    // Get current list/page data
    const indexOfLastPost = currentPage * numberOfRecPerPage;
    const indexOfFirstPost = indexOfLastPost - numberOfRecPerPage;
    const currentUserList = data && data?.slice(indexOfFirstPost, indexOfLastPost);

  
    // Change page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return <Pagination
        totalData={data?.length}
        dataPerPage={numberOfRecPerPage}
        paginate={paginate}
        currentPage={currentPage}
    />
}

export default UserTableFooter