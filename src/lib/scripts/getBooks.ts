// Pool of predefined values for book generation
const BOOK_POOL = {
	covers: [
		'book-1.webp',
		'book-2.webp',
		'book-3.webp',
		'book-4.webp',
		'book-5.webp'
	],
	authors: [
		'John Smith & William Martinez',
		'Jane Doe',
		'Michael Johnson',
		'Emily Brown',
		'David Wilson',
		'Sarah Davis',
		'Robert Miller',
		'Jessica Garcia',
		'William Martinez',
		'Mary Anderson'
	],
	titles: [
		'The Great Adventure',
		'Mystery of the Lost City',
		'Journey to the Unknown',
		'Tales from Beyond',
		'The Silent Observer',
		'Echoes of Tomorrow',
		'The Last Guardian',
		'Shadows in the Night',
		'The Forgotten Realm',
		'Chronicles of Time'
	],
	subtitles: [
		'A Journey of Discovery',
		'The Complete Guide',
		'An Epic Tale',
		'Stories from the Edge',
		'The Ultimate Collection',
		'A Modern Classic',
		'The Definitive Edition',
		'Secrets Revealed',
		'The Hidden Truth',
		'A New Beginning'
	],
	types: ['book', 'series', 'collection', 'magazine', 'journal'],
	tags: [
		'New',
		'',
		'',
		'Updated',
		'',
		'',
		'Featured',
		'',
		''
	],
	access: [true, false],
	trial: [true, false]
};

export interface Book {
	cover: string;
	author: string;
	title: string;
	subtitle: string;
	type: string;
	tag: string;
	access: boolean;
	trial: boolean;
}

export type BookOverrides = Partial<Book>;

/**
 * Get a random item from an array
 */
function getRandomItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get a random item from an array, excluding a specific value
 */
function getRandomItemExcluding<T>(array: T[], exclude: T): T {
	if (array.length === 1) {
		return array[0];
	}

	let item: T;
	do {
		item = getRandomItem(array);
	} while (item === exclude && array.length > 1);

	return item;
}

/**
 * Generate an array of books with random or specified attributes
 * @param count - Number of books to generate
 * @param overrides - Optional object to override specific attributes for all books
 * @returns Array of book objects
 */
export function getBooks(count: number, overrides: BookOverrides = {}): Book[] {
	const books: Book[] = [];
	let previousCover: string | null = null;

	for (let i = 0; i < count; i++) {
		let cover: string;

		if (overrides.cover) {
			cover = overrides.cover;
		} else {
			cover = previousCover
				? getRandomItemExcluding(BOOK_POOL.covers, previousCover)
				: getRandomItem(BOOK_POOL.covers);
			previousCover = cover;
		}

		const book: Book = {
			cover,
			author: overrides.author ?? getRandomItem(BOOK_POOL.authors),
			title: overrides.title ?? getRandomItem(BOOK_POOL.titles),
			subtitle: overrides.subtitle ?? getRandomItem(BOOK_POOL.subtitles),
			type: overrides.type ?? getRandomItem(BOOK_POOL.types),
			tag: overrides.tag ?? getRandomItem(BOOK_POOL.tags),
			access: overrides.access ?? getRandomItem(BOOK_POOL.access),
			trial: overrides.trial ?? getRandomItem(BOOK_POOL.trial)
		};

		books.push(book);
	}

	return books;
}
