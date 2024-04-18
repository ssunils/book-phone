export const Status = (props: { available: boolean }) => {
    if (props.available) {
        return (
            <span className="absolute top-2 left-2 inline-flex items-center rounded-md shadow-md bg-green-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                <i className="w-2 h-2 mr-1 rounded-full bg-green-800"></i>Available
            </span>
        );
    } else {
        return (
            <span className="absolute top-2 left-2 inline-flex items-center rounded-md shadow-md bg-amber-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                <i className="w-2 h-2 mr-1 rounded-full bg-amber-900"></i>Booked
            </span>
        )
    }
}