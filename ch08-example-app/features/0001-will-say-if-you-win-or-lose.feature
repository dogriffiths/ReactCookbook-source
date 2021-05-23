Feature: Will say if you or lose
  As a user
  I want to be told if I have won or lost
  So that it will be a proper game

  Scenario: Will say if I won
    Given I have started the game
    And the numbers are 'num1' and 'num2'
    When I guess the product of 'num1' and 'num2'
    Then I will be told that I have won

  Scenario: Will say if I lost
    Given I have started the game
    And the numbers are 'num1' and 'num2'
    When I guess something other than the product of 'num1' and 'num2'
    Then I will be told that I have lost

  Scenario: Result is not initially visible
    Given I have started the game
    Then I cannot see the result

  Scenario: Can play more than one game
    Given I have started the game
    And the numbers are 'num1' and 'num2'
    When I guess the product of 'num1' and 'num2'
    Then I can start the game again
    And I cannot see the result
    And the numbers are not 'num1' and 'num2'

  Scenario: Will not be able to play again until I have played
    Given I have started the game
    Then I cannot start the game again
