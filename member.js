function skillsMember() {
    return {
        name: "Member",
        description: "Member is a member of the group.",
        type: "object",
        properties: {
            id: {
                type: "string",
                description: "The ID of the member.",
            },
            name: {
                type: "string",
                description: "The name of the member.",
            },
            role: {
                type: "string",
                description: "The role of the member.",
            },
        },
    };
}