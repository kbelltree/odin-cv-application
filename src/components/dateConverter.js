function dateConverter(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { timeZone: 'UTC', year: 'numeric', month: 'short' });
}

export default dateConverter;