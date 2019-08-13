

export async function data()
{
    const result = await fetch('data.txt');
    return result.text();
}