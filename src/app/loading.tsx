export default function LoadingPage(){
    return (
        <div
        id="spinner"
        // Add "show" class to activate the loading indicator
        className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
        <div className="spinner"></div>
        </div>
    );
};