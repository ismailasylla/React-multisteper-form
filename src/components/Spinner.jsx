import Loader from "react-loader-spinner"; // Loading Indicator

const Spinner = () => {
  return (
    <>
      <Loader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
        type="Oval"
        color="#ee1b24"
        height={100}
        width={100}
        timeout={2000}
      ></Loader>
    </>
  );
};

export default Spinner;
