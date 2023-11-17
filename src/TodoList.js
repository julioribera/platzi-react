function TodoList({children}) {
    return (
        <ul style={{
            padding: '0',
        }}>
            {children}
        </ul>
    )
}

export { TodoList };