def climbingLeaderboard(ranked, player):
    # Remove duplicates from the ranked list (since players with the same score share the same rank)
    ranked = sorted(set(ranked), reverse=True)
    ranks = []
    
    # For each score of the player, determine their rank
    for score in player:
        while ranked and score >= ranked[-1]:
            ranked.pop()  # Remove the lowest score that is less than the player's score
        ranks.append(len(ranked) + 1)  # The rank is based on the remaining leaderboard length
        
    return ranks

# Example usage
ranked = [100, 90, 90, 80]
player = [70, 80, 105]
print(climbingLeaderboard(ranked, player))  # Output: [4, 3, 1]
