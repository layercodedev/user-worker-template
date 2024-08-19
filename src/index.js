import { OpenAI } from 'openai';

export default {
	async fetch(request, env, ctx) {
		// Call openai api
		const openai = new OpenAI({
			apiKey: env.OPENAI_API_KEY,
		});
		try {
			const response = await openai.chat.completions.create({
				model: 'gpt-4o',
				messages: [
					{
						role: 'user',
						content: 'Tell me a haiku about AI',
					},
				],
			});
			return new Response(response.choices[0].message.content);
		} catch (error) {
			console.error(error);
			return new Response('Error calling OpenAI', { status: 500 });
		}
	},
};
