
import React from "react"

const PaginatorTr = ({pages,currentPage,currentPageNumber}) =>{


    return(
        <>
          <div className="container">
            <ul className="pagination">
                {
                    pages.map(home=>{
                        return(    
                            <li className={currentPageNumber===home?"active":""}><a href={"#"+home} onClick={()=>currentPage(home)}>{home}</a></li>
                        )}
                    )
                }
                
                {/* <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li> */}
            </ul>
        </div>
        </>
    )
}

export default PaginatorTr