function FormComponent({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="userNumber">Write number between 0 & 100</label>
            <input type="number" name="userNumber" id="userNumber" />
            <button type="submit">submit</button>
        </form>
    );
}

export default FormComponent