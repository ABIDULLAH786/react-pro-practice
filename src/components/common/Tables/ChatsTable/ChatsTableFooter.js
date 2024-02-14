
import React, { useContext, useEffect, useState } from 'react'
import Pagination from '../../Pagination/Pagination';
import { UserTableContext } from '../../../../context/UsersTableContext';

function ChatsTableFooter({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfRecPerPage] = useState(10);
    // const { setPerPageData, tableData } = useContext(UserTableContext)

    // Get current list/page data
    const indexOfLastPost = currentPage * numberOfRecPerPage;
    const indexOfFirstPost = indexOfLastPost - numberOfRecPerPage;
    const currentUserList = data && data?.slice(indexOfFirstPost, indexOfLastPost);

    console.log("currentUserList: ", currentUserList)
  

    // Change page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return <Pagination
        totalData={data?.length}
        dataPerPage={numberOfRecPerPage}
        paginate={paginate}
        currentPage={currentPage}
    />
}

export default ChatsTableFooter