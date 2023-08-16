import { useEffect, useState } from "react";
import CommentList from "./Comment";
import { GET_COMMENTS } from "../utils/constants";

const CommentData = [
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur r incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
            {
                name: 'Suyash Sinha',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: []
            },
            {
                name: 'Suyash Sinha',
                text:'Lorem ipsum dolor sit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: [
                    {
                        name: 'Suyash Sinha',
                        text:'Lorem ipsum dolorsmod tempor incididunt ut labore et dolore magna aliqua.',
                        replies: []
                    },
                    {
                        name: 'Suyash Sinha',
                        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        replies: [
                            {
                                name: 'Suyash Sinha',
                                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                replies: []
                            },
                            {
                                name: 'Suyash Sinha',
                                text:'Lorem ipsum dolor si et dolore magna aliqua.',
                                replies: [
                                    {
                                        name: 'Suyash Sinha',
                                        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                        replies: [
                                            {
                                                name: 'Suyash Sinha',
                                                text:'Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                replies: []
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsumtempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: [
            {
                name: 'Suyash Sinha',
                text:'Lorem ipsum dolor od tempor incididunt ut labore et dolore magna aliqua.',
                replies: []
            },
            {
                name: 'Suyash Sinha',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: [
                    {
                        name: 'Suyash Sinha',
                        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut liqua.',
                        replies: [
                            {
                                name: 'Suyash Sinha',
                                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
                                replies: [
                                    {
                                        name: 'Suyash Sinha',
                                        text:'Lorem ipsum dolor sit ametipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Suyash Sinha',
                        text:'Lorem ipsum dolor sit amet, consectetued do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consec tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscingmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipisceiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sd tempor incididunt ut labore et dolore magna aliqua.',
        replies: []
    },
    {
        name: 'Suyash Sinha',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab',
        replies: []
    },
    
]

const CommentSection = ({count}) => {


    return(
        <div className="my-4">
            <h1 className="text-lg font-thin to-black">{count} Comments:-</h1>
            <CommentList comments={CommentData} />
        </div>
    )
};

export default CommentSection;