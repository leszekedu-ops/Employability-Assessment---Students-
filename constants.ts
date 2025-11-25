import { Question } from './types';

export const QUESTIONS: Question[] = [
  // 1. Communication
  {
    id: 1,
    category: 'Communication',
    text: "You need to email a teacher about missing a deadline due to a genuine emergency. You:",
    options: [
      { text: "Send a brief text-style email saying you can't make it, assuming they'll understand.", points: 4 },
      { text: "Write a clear email with a subject line, explaining the context briefly, apologising, and proposing a specific new submission time.", points: 10 },
      { text: "Wait until the next class to explain in person so you can gauge their reaction.", points: 5 },
      { text: "Write a long, detailed explanation of the personal emergency to ensure they sympathise.", points: 3 }
    ]
  },
  {
    id: 2,
    category: 'Communication',
    text: "During a group debate, a peer presents an argument you know is factually incorrect. You:",
    options: [
      { text: "Interrupt to correct the fact so the discussion stays on track.", points: 3 },
      { text: "Subtly signal to others (e.g., a knowing look) that the information is questionable.", points: 2 },
      { text: "Wait for them to finish, then present contradictory evidence calmly: \"That's an interesting point, though the 2024 report suggests...\"", points: 10 },
      { text: "Let it slide; correcting them might cause unnecessary tension.", points: 4 }
    ]
  },
  {
    id: 3,
    category: 'Communication',
    text: "You are explaining a complex concept to a classmate who is struggling. They still look confused after your first attempt. You:",
    options: [
      { text: "Repeat the explanation again, ensuring you articulate the words clearly.", points: 3 },
      { text: "Ask specifically which part is confusing, then use an analogy to explain just that section.", points: 10 },
      { text: "Suggest they memorise the key definition since the concept is difficult.", points: 2 },
      { text: "Give a simplified 'high-level' summary to keep the conversation moving.", points: 5 }
    ]
  },
  {
    id: 4,
    category: 'Communication',
    text: "You receive a message from a team member that feels passive-aggressive. You:",
    options: [
      { text: "Reply with a short, cold message to show you aren't pleased.", points: 2 },
      { text: "Share the message with a friend to vent before deciding what to do.", points: 3 },
      { text: "Wait a moment to cool down, then reply professionally asking for clarification on the project details.", points: 10 },
      { text: "Ignore the tone and just do the work to avoid conflict.", points: 4 }
    ]
  },
  {
    id: 5,
    category: 'Communication',
    text: "You need to give feedback to a peer who has done a poor job on their section. You:",
    options: [
      { text: "Rewrite the section yourself; it's faster than explaining what's wrong.", points: 4 },
      { text: "Say it looks fine to avoid hurting their feelings, even if it lowers the grade.", points: 2 },
      { text: "Tell them: \"This section needs a lot of work before we can submit.\"", points: 3 },
      { text: "Use the 'Sandwich Method': Validating their effort, pointing out specific gaps, and offering support to fix it.", points: 10 }
    ]
  },

  // 2. Teamwork
  {
    id: 6,
    category: 'Teamwork',
    text: "You are assigned a group project with people who are friends with each other, but strangers to you. You:",
    options: [
      { text: "Focus on your assigned tasks and keep social interaction to a minimum.", points: 4 },
      { text: "Take charge early to establish your role in the group.", points: 5 },
      { text: "Make an effort to break the ice and find common ground before starting work.", points: 10 },
      { text: "Ask the teacher if there's an option to work individually.", points: 1 }
    ]
  },
  {
    id: 7,
    category: 'Teamwork',
    text: "A team member is consistently missing deadlines. The final due date is approaching. You:",
    options: [
      { text: "Send a message to the group chat reminding everyone that 'some people' need to catch up.", points: 2 },
      { text: "Speak to them privately to check if everything is okay, then set a strict internal deadline.", points: 10 },
      { text: "Vent to the other group members about the lack of effort.", points: 3 },
      { text: "Inform the teacher about the situation so your grade isn't affected.", points: 5 }
    ]
  },
  {
    id: 8,
    category: 'Teamwork',
    text: "Your group votes for an idea you think is weak compared to your own. You:",
    options: [
      { text: "Go along with it, but keep your effort lower since you don't believe in it.", points: 2 },
      { text: "Keep debating the merits of your idea to see if they will change their minds.", points: 4 },
      { text: "Accept the decision and commit 100% to making their chosen idea work.", points: 10 },
      { text: "Try to steer the project subtly back toward your idea as you work.", points: 3 }
    ]
  },
  {
    id: 9,
    category: 'Teamwork',
    text: "You realise you have taken on too much work for the group and won't finish by Friday. You:",
    options: [
      { text: "Push through and stay up all night to finish, even if the quality suffers.", points: 5 },
      { text: "Communicate this on Tuesday, asking for help to redistribute the load.", points: 10 },
      { text: "Wait until Friday to mention it, hoping you'll get it done by a miracle.", points: 1 },
      { text: "Do as much as you can and apologise for the rest later.", points: 3 }
    ]
  },
  {
    id: 10,
    category: 'Teamwork',
    text: "Two members of your team are having a personal disagreement that is slowing down work. You:",
    options: [
      { text: "Validate one person's side to help resolve the conflict quickly.", points: 3 },
      { text: "Stay out of it; it's their personal issue to resolve.", points: 4 },
      { text: "Mediate: \"Let's pause the personal discussion and focus on the project goals for this hour.\"", points: 10 },
      { text: "Suggest they work separately on different parts of the project.", points: 6 }
    ]
  },

  // 3. Presentation Skills
  {
    id: 11,
    category: 'Presentation Skills',
    text: "You have a 5-minute presentation. Your preparation strategy is:",
    options: [
      { text: "Memorise a script so you can deliver it perfectly without looking at notes.", points: 6 },
      { text: "Create visual bullet points and practice speaking naturally around them, timing yourself.", points: 10 },
      { text: "Review the material mentally and rely on your ability to improvise.", points: 3 },
      { text: "Write detailed notes on the slides to ensure you don't miss any information.", points: 2 }
    ]
  },
  {
    id: 12,
    category: 'Presentation Skills',
    text: "During your presentation, you notice the audience looks disengaged. You:",
    options: [
      { text: "Speed up slightly to finish sooner.", points: 3 },
      { text: "Lose confidence and stick strictly to your notes.", points: 2 },
      { text: "Change your tone, pause, or ask a rhetorical question to re-engage them.", points: 10 },
      { text: "Focus on the teacher/assessor since they are the ones grading you.", points: 4 }
    ]
  },
  {
    id: 13,
    category: 'Presentation Skills',
    text: "Technical failure: Your PowerPoint slides won't load. You:",
    options: [
      { text: "Ask if you can present later when the tech is fixed.", points: 3 },
      { text: "Apologise for the technical issue and wait for IT support.", points: 4 },
      { text: "Remain calm, use your backup notes, and present verbally without the slides.", points: 10 },
      { text: "Attempt to fix the computer yourself while the audience waits.", points: 5 }
    ]
  },
  {
    id: 14,
    category: 'Presentation Skills',
    text: "Someone asks a difficult question at the end that you don't know the answer to. You:",
    options: [
      { text: "Give a vague answer that sounds plausible.", points: 2 },
      { text: "Say: \"That's a great question. I don't have that specific data, but I can follow up with you.\"", points: 10 },
      { text: "Admit you don't know and move to the next question.", points: 5 },
      { text: "Pivot to a related topic that you do know about.", points: 4 }
    ]
  },
  {
    id: 15,
    category: 'Presentation Skills',
    text: "You are designing your slides. You choose:",
    options: [
      { text: "To include all your key paragraphs so the audience can read along.", points: 2 },
      { text: "To use engaging animations and transitions to keep interest.", points: 4 },
      { text: "High-quality visuals and minimal text (keywords only).", points: 10 },
      { text: "A simple, clean template with bullet points for every sentence.", points: 5 }
    ]
  },

  // 4. Leadership
  {
    id: 16,
    category: 'Leadership',
    text: "Your sports team is losing badly at halftime. The mood is defeatist. You:",
    options: [
      { text: "Stay focused on your own performance to lead by example.", points: 5 },
      { text: "Point out the specific mistakes the defence is making so they can fix them.", points: 3 },
      { text: "Focus on one achievable goal: \"Let's just win the next 10 minutes. Heads up.\"", points: 10 },
      { text: "Try to lighten the mood with a joke.", points: 4 }
    ]
  },
  {
    id: 17,
    category: 'Leadership',
    text: "You are leading a project. There is a boring administrative task no one wants to do. You:",
    options: [
      { text: "Keep the more interesting strategic task for yourself as the leader.", points: 2 },
      { text: "Assign the boring task to the member who has contributed the least so far.", points: 3 },
      { text: "Do the boring task yourself to set an example, or ensure tasks are rotated fairly.", points: 10 },
      { text: "Ask for a volunteer, but assign it randomly if no one speaks up.", points: 5 }
    ]
  },
  {
    id: 18,
    category: 'Leadership',
    text: "Your team made a collective error that cost you marks. The teacher asks what happened. You:",
    options: [
      { text: "Explain which team member was responsible for that section.", points: 1 },
      { text: "Stay quiet and let the group handle the feedback.", points: 3 },
      { text: "Say: \"As a team, we missed that detail. We've discussed how to check it next time.\"", points: 10 },
      { text: "Take full blame yourself to protect the team.", points: 6 }
    ]
  },
  {
    id: 19,
    category: 'Leadership',
    text: "A quiet member of your group has good ideas but rarely speaks up. You:",
    options: [
      { text: "Assume they prefer to just listen and leave them be.", points: 3 },
      { text: "Wait for them to gain confidence naturally over time.", points: 4 },
      { text: "During a meeting, specifically ask: \"Sarah, did you have thoughts on this part?\"", points: 10 },
      { text: "Represent their views for them: \"I think Sarah agrees with me that...\"", points: 2 }
    ]
  },
  {
    id: 20,
    category: 'Leadership',
    text: "A decision needs to be made. The group is split 50/50. You:",
    options: [
      { text: "Propose flipping a coin to save time and avoid argument.", points: 3 },
      { text: "Suggest a compromise that combines elements of both, or list pros/cons to sway the vote logically.", points: 10 },
      { text: "Go with the majority of the most experienced members.", points: 4 },
      { text: "Delay the decision to let people cool off.", points: 2 }
    ]
  },

  // 5. Critical Thinking
  {
    id: 21,
    category: 'Critical Thinking',
    text: "You see a viral post on social media claiming a major event has happened. You:",
    options: [
      { text: "Share it, adding a caption like 'Is this real??'", points: 2 },
      { text: "Check the comments to see what the general consensus is.", points: 5 },
      { text: "Search for the story on reputable news outlets before interacting with it.", points: 10 },
      { text: "Assume it's probably exaggerated and scroll past.", points: 4 }
    ]
  },
  {
    id: 22,
    category: 'Critical Thinking',
    text: "You are solving a problem and your calculator gives an answer that seems physically impossible. You:",
    options: [
      { text: "Double check your entry, but if it comes up again, write it down.", points: 3 },
      { text: "Assume the question is a trick or flawed.", points: 2 },
      { text: "Recognise the error, and re-evaluate your formula or unit conversions.", points: 10 },
      { text: "Adjust the answer slightly to a number that looks more realistic.", points: 1 }
    ]
  },
  {
    id: 23,
    category: 'Critical Thinking',
    text: "You have two assignments due on the same day and a sports commitment. You:",
    options: [
      { text: "Try to multitask and do everything at once.", points: 3 },
      { text: "Skip the sports commitment, assuming the coach won't mind.", points: 2 },
      { text: "Prioritise: Start the hardest assignment early, schedule the easier one, and communicate with the coach.", points: 10 },
      { text: "Focus on the assignment you enjoy most and rush the other one.", points: 4 }
    ]
  },
  {
    id: 24,
    category: 'Critical Thinking',
    text: "You find a source that supports your essay argument perfectly, but it appears biased. You:",
    options: [
      { text: "Use it, but acknowledge it might be biased in your essay.", points: 6 },
      { text: "Discard it and look for peer-reviewed or more neutral sources, even if they challenge your view.", points: 10 },
      { text: "Use the information without citing the specific source.", points: 1 },
      { text: "Modify your search terms to find other sources that agree with you.", points: 4 }
    ]
  },
  {
    id: 25,
    category: 'Critical Thinking',
    text: "A friend tells you that a mutual friend has been criticising you. You:",
    options: [
      { text: "Ask for details on exactly what was said.", points: 3 },
      { text: "Vent to another friend about the situation.", points: 2 },
      { text: "Consider the source's reliability and wait for concrete evidence or a direct conversation.", points: 10 },
      { text: "Distance yourself from the mutual friend immediately.", points: 4 }
    ]
  },

  // 6. Professionalism
  {
    id: 26,
    category: 'Professionalism',
    text: "You have a job interview at 10:00 AM. You:",
    options: [
      { text: "Aim to arrive exactly at 10:00 AM to maximise your prep time.", points: 5 },
      { text: "Arrive at 9:45 AM, dressed smartly, to compose yourself.", points: 10 },
      { text: "Arrive at 10:05 AM, but send a message beforehand letting them know.", points: 3 },
      { text: "Arrive early but wait in your car/outside until 10:00 AM.", points: 6 }
    ]
  },
  {
    id: 27,
    category: 'Professionalism',
    text: "Your manager gives you feedback that your work has been 'sloppy' lately. You:",
    options: [
      { text: "Feel disheartened and withdraw for the rest of the shift.", points: 3 },
      { text: "Explain the reasons why (e.g., tiredness, workload) so they understand.", points: 4 },
      { text: "Listen without interrupting, ask for specific examples, and thank them for the feedback.", points: 10 },
      { text: "Start looking for a new job where you are appreciated.", points: 1 }
    ]
  },
  {
    id: 28,
    category: 'Professionalism',
    text: "You are at a work experience placement with no tasks for the next 20 minutes. You:",
    options: [
      { text: "Check your phone discreetly while waiting.", points: 3 },
      { text: "Ask your supervisor: \"I've finished X, is there anything else I can assist with?\"", points: 10 },
      { text: "Chat with other employees to build rapport.", points: 5 },
      { text: "Look busy by organising your workspace.", points: 4 }
    ]
  },
  {
    id: 29,
    category: 'Professionalism',
    text: "You overhear a colleague sharing confidential information about a client. You:",
    options: [
      { text: "Listen, but decide not to repeat it to anyone.", points: 5 },
      { text: "Ask a question to clarify what they mean.", points: 2 },
      { text: "Walk away immediately. If it's a serious breach, report it privately.", points: 10 },
      { text: "Mention it to another colleague to see if they heard it too.", points: 1 }
    ]
  },
  {
    id: 30,
    category: 'Professionalism',
    text: "You are sending an email to a potential employer. Your sign-off is:",
    options: [
      { text: "\"Thanks, [Your Name]\"", points: 4 },
      { text: "\"Sincerely, [Your Name]\"", points: 10 },
      { text: "Just your name.", points: 3 },
      { text: "\"Best, [Your Name]\"", points: 7 }
    ]
  },

  // 7. Resilience
  {
    id: 31,
    category: 'Resilience',
    text: "You studied hard for an exam but got a lower grade than expected. You:",
    options: [
      { text: "Decide you aren't naturally good at the subject and focus on others.", points: 3 },
      { text: "Ask the teacher to explain why the marking was so harsh.", points: 2 },
      { text: "Allow yourself to be disappointed, then review the paper to find specific knowledge gaps.", points: 10 },
      { text: "Keep the grade to yourself and pretend it was fine.", points: 4 }
    ]
  },
  {
    id: 32,
    category: 'Resilience',
    text: "You apply for several part-time jobs and get rejected. You:",
    options: [
      { text: "Take a break from applying for a few weeks to recover.", points: 4 },
      { text: "Vent to friends about how difficult the process is.", points: 3 },
      { text: "Ask one of the employers for feedback on your CV and refine your approach.", points: 10 },
      { text: "Send out even more applications, but cast a wider net.", points: 6 }
    ]
  },
  {
    id: 33,
    category: 'Resilience',
    text: "You stumble over your words during a presentation. You:",
    options: [
      { text: "Rush through the rest to finish as quickly as possible.", points: 3 },
      { text: "Stop and apologise profusely for the mistake.", points: 4 },
      { text: "Take a breath, smile, correct yourself, and carry on calmly.", points: 10 },
      { text: "Freeze for a moment, feeling flustered.", points: 2 }
    ]
  },
  {
    id: 34,
    category: 'Resilience',
    text: "You are overwhelmed with coursework and feeling stressed. You:",
    options: [
      { text: "Avoid the work for a day to decompress.", points: 4 },
      { text: "Break the work down into small chunks, make a schedule, and prioritise.", points: 10 },
      { text: "Ask a friend if you can look at their notes to catch up.", points: 2 },
      { text: "Power through with energy drinks and less sleep.", points: 3 }
    ]
  },
  {
    id: 35,
    category: 'Resilience',
    text: "You organised an outdoor event but it starts raining heavily. You:",
    options: [
      { text: "Suggest postponing the event to another day.", points: 5 },
      { text: "Feel frustrated and complain to your co-organisers about the bad luck.", points: 2 },
      { text: "Adapt: Move to a backup location or embrace the weather if safe.", points: 10 },
      { text: "Let the attendees decide what they want to do.", points: 4 }
    ]
  },

  // 8. Initiative
  {
    id: 36,
    category: 'Initiative',
    text: "You finish your classwork 20 minutes early. You:",
    options: [
      { text: "Chat quietly with a neighbour who is also finished.", points: 4 },
      { text: "Sit quietly and wait for the next instruction.", points: 3 },
      { text: "Start on the homework or ask the teacher if there's an extension task.", points: 10 },
      { text: "Check your phone under the desk.", points: 1 }
    ]
  },
  {
    id: 37,
    category: 'Initiative',
    text: "You notice a process at your part-time job is inefficient. You:",
    options: [
      { text: "Continue doing it the way you were trained; it's not your place to change it.", points: 4 },
      { text: "Mention to a colleague how annoying the process is.", points: 2 },
      { text: "Think of a solution and propose it politely to your manager.", points: 10 },
      { text: "Adjust the process slightly for yourself to save time.", points: 6 }
    ]
  },
  {
    id: 38,
    category: 'Initiative',
    text: "You want to learn a skill (e.g., coding) that isn't taught at school. You:",
    options: [
      { text: "Wish your school offered it and leave it at that.", points: 2 },
      { text: "Decide to wait until university or a job teaches you.", points: 3 },
      { text: "Find free online resources and set aside time to teach yourself.", points: 10 },
      { text: "Ask a friend who knows it to show you the basics sometime.", points: 6 }
    ]
  },
  {
    id: 39,
    category: 'Initiative',
    text: "The trash can in the common room is overflowing. You:",
    options: [
      { text: "Balance your trash on top carefully so it doesn't fall.", points: 3 },
      { text: "Leave your trash on a nearby table instead.", points: 2 },
      { text: "Push the trash down if safe, or notify a janitor/change the bag.", points: 10 },
      { text: "Comment on how messy the room is to others.", points: 2 }
    ]
  },
  {
    id: 40,
    category: 'Initiative',
    text: "You see a poster for a volunteering opportunity that looks interesting but you don't know anyone going. You:",
    options: [
      { text: "Decide not to go as it might be awkward alone.", points: 3 },
      { text: "Sign up anyway; view it as a chance to meet new people.", points: 10 },
      { text: "Ask a friend to sign up with you, and only go if they say yes.", points: 5 },
      { text: "Take a picture of the poster to think about later.", points: 4 }
    ]
  },
];