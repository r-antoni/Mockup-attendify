const PageTitle = (props) => {
    const {pageName1, pageName2, anotherPage} = props
    return (
        <div>
            <div className="pt-6 pb-9">
                <h1 className="text-2xl text-[#4154F1] font-medium">{pageName2}</h1>
                <p className="text-[#989797] text-sm"> {pageName1} <span className="text-title">{pageName2} {anotherPage}</span></p>
            </div>
        </div>
    );
}

export default PageTitle;