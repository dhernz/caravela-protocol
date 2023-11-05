// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Twitter {
    struct Tweet {
        address author;
        string content;
        uint256 timestamp;
    }

    Tweet[] public tweets;

    event TweetCreated(address author, string content, uint256 timestamp);

    function postTweet(string calldata _content) external {
        tweets.push(Tweet({
            author: msg.sender,
            content: _content,
            timestamp: block.timestamp
        }));
        emit TweetCreated(msg.sender, _content, block.timestamp);
    }

    function getTweet(uint _index) public view returns (Tweet memory) {
        require(_index < tweets.length, "Tweet does not exist.");
        return tweets[_index];
    }
}
