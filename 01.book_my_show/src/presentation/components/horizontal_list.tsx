


interface HorizontalListProps<T> {
    dataList: T[],
    builder: (dataItem: T) => JSX.Element,
}

function HorizontalList<T>(props: HorizontalListProps<T>) {
    return (
        <div className="flex overflow-x-auto space-x-4 pb-10">
            {
                props.dataList.map((e) => (
                    props.builder(e)
                ))
            }
        </div>
    );
}

export default HorizontalList;