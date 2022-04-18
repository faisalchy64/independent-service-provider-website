function Checkout() {
    const handleSubmit = () => {};
    return (
        <div className="common-box my-5">
            <h1 className="my-3">CONFIRM YOUR PACK NOW</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name" />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                />
                <button className="mb-2" type="submit">
                    Checkout
                </button>
            </form>
        </div>
    );
}

export default Checkout;
