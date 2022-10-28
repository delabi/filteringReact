const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <<th>Min Price</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.minPrice}</td>

                    </tr>
                ))}
                
            </tbody>
        </table>
    );
};