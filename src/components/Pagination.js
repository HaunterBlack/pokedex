import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

function Pagination(props) {
    const { index, onNextPage, onPreviosPage, onSetPage } = props;
    return (
        <div className="poke-index">
            <button onClick={onPreviosPage}><BsCaretLeftFill /></button>
            <div onClick={()=>{ onSetPage(0)}} className={index === 0 ? 'current-page' : null}>1</div>
            <div onClick={()=>{ onSetPage(1)}} className={index === 1 ? 'current-page' : null}>2</div>
            <div onClick={()=>{ onSetPage(2)}} className={index === 2 ? 'current-page' : null}>3</div>
            <div onClick={()=>{ onSetPage(3)}} className={index === 3 ? 'current-page' : null}>4</div>
            <div onClick={()=>{ onSetPage(4)}} className={index === 4 ? 'current-page' : null}>5</div>
            <div onClick={()=>{ onSetPage(5)}} className={index === 5 ? 'current-page' : null}>6</div>
            <div onClick={()=>{ onSetPage(6)}} className={index === 6 ? 'current-page' : null}>7</div>
            <div onClick={()=>{ onSetPage(7)}} className={index === 7 ? 'current-page' : null}>8</div>
            <div onClick={()=>{ onSetPage(8)}} className={index === 8 ? 'current-page' : null}>9</div>
            <button onClick={onNextPage}><BsCaretRightFill /></button>
        </div>
    );
}

export default Pagination;