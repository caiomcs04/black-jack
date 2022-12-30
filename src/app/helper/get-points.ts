
export const getPoints = (card: number): number => {
    console.log(card)
    switch (true) {
        case card < 5: return 2
        case card < 9: return 3
        case card < 13: return 4
        case card < 17: return 5
        case card < 21: return 6
        case card < 25: return 7
        case card < 29: return 8
        case card < 33: return 9
        case card < 49: return 10
        case card < 53: return 11

        default: return 1
    }
}