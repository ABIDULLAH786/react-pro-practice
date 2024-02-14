import useWindowDimensions from "../../../hooks/useWindowDimensions";
import styles from './Pagination.module.scss'
import ButtonFilled from "../Button/ButtonFilled";
import { Button } from "@mui/material";
const Pagination = ({
    dataPerPage,
    totalData,
    currentPage,
    paginate
}) => {
    const pageNumbers = [];
    const { width } = useWindowDimensions();

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNext = () => {
        currentPage !== pageNumbers.length &&
            paginate(currentPage + 1);
    };

    const handlePrevious = () => {
        currentPage !== pageNumbers[0] &&
            paginate(currentPage - 1);
    };
    return (
        <div className={styles.root}>
            {/* Previous */}
            <ButtonFilled

                backgroundColor="white"
                color='#344054'
                border="none"
                text={"Previous"}
                onClick={handlePrevious}
                disable={currentPage === pageNumbers[pageNumbers.length - 1]}
            />

            {/* Page Numbers */}
            {width > 978 ? (
                <div className={styles.page_no_container}>
                    {pageNumbers.map((number, index) => {
                        return (
                            <span key={index}>

                                <ButtonFilled
                                    backgroundColor={number == currentPage ? "#F4FAFE" : "white"}
                                    color={number == currentPage ? "#38A0ED" : "#344054"}
                                    border="none"
                                    text={number}
                                    key={number}
                                    onClick={() => paginate(number)}
                                />
                            </span>
                        );
                    })}
                </div>
            )
                :
                // For Small Screen Only 
                <div className=" lg:hidden  h-8 w-8 flex justify-center items-center cursor-pointer  text-[10px] transition duration-150 ease-in  rounded-[10px] font-semibold bg-yellow-light text-white">
                    <ButtonFilled
                        backgroundColor={"#F4FAFE"}
                        color={"#38A0ED"}
                        bnorder="none"
                        text={currentPage}
                    />
                </div>
            }

            {/* Next Button */}

            <ButtonFilled
                backgroundColor="white"
                color='#344054'
                border="none"
                text={"Next"}
                onClick={handleNext}
                disable={currentPage === pageNumbers[pageNumbers.length - 1]}
            />

        </div>
    );
};
export default Pagination;