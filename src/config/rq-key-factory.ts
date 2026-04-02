export const RQKEYFACTORY = {
    comments: (id: number | string) => ["comments", `commnets-${id}`],
    post: (id: number | string) => ["post", `post-${id}`],
    profileCharacters:
        (id: number | string) => ["profile-characters", `profile-characters-${id}`],
    profileUser:
        (id: number | string) => ["profile-user", `profile-user-${id}`],
    profileSessions:
        (id: number | string) => ["profile-session", `profile-session-${id}`],
    profilePosts:
        (id: number | string) => ["profile-posts", `profile-posts-${id}`],
    profileInfo:
        (id: number | string) => ["profile-info", `profile-info-${id}`],
    banReason:
        (id: number | string) => ["ban-reason", `ban-reason-${id}`],
    searchUser: () => ["search-user"],
    findByArrayUser: () => ["find-by-array-user"],
    map: () => ['map'],
    entity: () => ['entity'],
    characters: (id: number | string) => ['characters', `characters-${id}`],
    object: () => ['object'],
    fixed: (id: number | string) => ['fixed', `get-fixed-${id}`],
    departments: () => ['departments'],
    mySubscribe: () => ['my-subscribe'],
    mySubscribers: () => ['my-subscribers'],
    session: (id: number | string) => ['session', `session-${id}`],
    community: () => ['community'],
    posts: (id: number | string) => ['posts', `posts-${id}`],
}
