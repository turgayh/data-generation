/* eslint-disable react/prop-types */
const DataMatched = ({ props }) => {
    let data = JSON.stringify(props.data);
    return (
        <div className="container">
            {console.log(props)}
            {data}
        </div>
    );
};

export default DataMatched;
