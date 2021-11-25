/**
 * Create an embedded youtube link to support iframes on client
 *
 * @param video
 * @returns {string|null}
 */
const createValidYoutubeLink = video => {
    if (!video) {
        return null
    }

    const [_, videoId] = video.split('?v=')

    return `https://www.youtube.com/embed/${videoId}`
}

export default createValidYoutubeLink