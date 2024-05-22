export default function HeroComponent(){
    return (
        <div className="flex flex-col justify-center items-center text-center px-10 py-10 h-96 bg-gray-100 w-full">
            <h2 className="text-3xl font-bold py-4 uppercase">Mike Litman</h2>
            <h2 className="text-xl font-bold py-4">Global Thought Leader</h2>
            <p className="text-lg py-4">
                President, Founder & CEO Of Mikes International, Serving as A Global Thought Leader in Leadership, Management & Entrepreneurship Coaching, A Goose-Bumping Motivational & Keynote Speaker, Moderator, And Storyteller. Certified In NLP, MPM, CBT, And Life & Success Coaching. Specializes In Obsessive Standard American Accent Modification, Elimination, And Clear Speech Therapy. Additionally, An Expert Natural Spoken English Trainer and Official Member Of The International Human Rights Commission (IHRC).
            </p>
            <div className="flex justify-center py-4">
                <button
                    className="flex justify-center items-center bg-black hover:bg-red-900 text-white rounded-lg gap-2 p-2">
                    <p>Know More</p>
                </button>
            </div>
        </div>
    )
}