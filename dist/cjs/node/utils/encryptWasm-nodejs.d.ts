/// <reference types="node" />
/**
 * Reads the contents of a file asynchronously.
 * @param {string} path - The path to the file.
 * @returns {Promise<string>} A promise that resolves with the file contents as a string.
 * @throws {Error} If there is an error reading the file.
 */
export function readFile(path: string): Promise<string>;
/**
 * Retrieves a ReadableStreamDefaultReader for an encrypted stream generated from a File object.
 * @param {string} filePath - The File object to create a ReadableStream from.
 * @param {Uint8Array} encryptedKey - The encryption key used to encrypt the stream.
 * @returns {Promise<ReadableStreamDefaultReader<Uint8Array>>} A Promise that resolves with a ReadableStreamDefaultReader<Uint8Array>.
 */
export function getEncryptedStreamReader(filePath: string, encryptedKey: Uint8Array): Promise<ReadableStreamDefaultReader<Uint8Array>>;
/**
 * Calculates the Blake3 hash of a file given its path.
 * @param {string} path - The path to the file.
 * @returns {Promise<Buffer>} - A promise that resolves with the hash value as a Buffer, or rejects with an error.
 */
export function calculateB3hashFromFile(path: string): Promise<Buffer>;
/**
 * Calculates the Blake3 hash of a file after encrypting it in chunks using a provided key.
 * @param {string} filePath - The path to the file to be encrypted and hashed.
 * @param {Uint8Array} encryptedKey - The key used for encryption.
 * @returns {Promise<{ b3hash: Buffer; encryptedFileSize: number }>} A Promise that resolves to an object containing the Blake3 hash (`b3hash`) and the size of the encrypted file (`encryptedFileSize`).
 */
export function calculateB3hashFromFileEncrypt(filePath: string, encryptedKey: Uint8Array): Promise<{
    b3hash: Buffer;
    encryptedFileSize: number;
}>;
/**
 * Removes the encryption key from an encrypted CID.
 * @param {string} encryptedCid - The encrypted CID to remove the key from.
 * @returns {string} The CID with the encryption key removed.
 */
export function removeKeyFromEncryptedCid(encryptedCid: string): string;
/**
 * Combines an encryption key with an encrypted CID.
 * @param {string} key - The encryption key to combine with the encrypted CID.
 * @param {string} encryptedCidWithoutKey - The encrypted CID without the encryption key.
 * @returns {string} The encrypted CID with the encryption key combined.
 */
export function combineKeytoEncryptedCid(key: string, encryptedCidWithoutKey: string): string;
/**
 * Creates an encrypted Content Identifier (CID) from the provided parameters.
 * @param cidTypeEncrypted - The encrypted type of the CID.
 * @param encryptionAlgorithm - The encryption algorithm used.
 * @param chunkSizeAsPowerOf2 - The chunk size as a power of 2.
 * @param encryptedBlobHash - The encrypted hash of the blob.
 * @param encryptionKey - The encryption key used.
 * @param padding - Additional padding to be used.
 * @param originalCid - The original CID before encryption.
 * @returns A Uint8Array representing the encrypted CID.
 */
export function createEncryptedCid(cidTypeEncrypted: any, encryptionAlgorithm: any, chunkSizeAsPowerOf2: any, encryptedBlobHash: any, encryptionKey: any, padding: any, originalCid: any): Uint8Array;
/**
 * Encrypts a file using a specified encryption key and CID. This function
 * reads the input file, calls an encryption function to encrypt the file content,
 * saves the encrypted file, calculates the encrypted blob hash, constructs the
 * encrypted CID, and returns the encrypted file path and the encrypted CID.
 * @param {string} file - The path to the file to be encrypted.
 * @param {string} filename - The name of the file.
 * @param {Uint8Array} encryptedKey - The encryption key to be used.
 * @param {Buffer} cid - The Content Identifier of the file.
 * @returns {Promise<{ encryptedFile: string; encryptedCid: string }>} A promise that resolves with an object containing the encrypted file path and the encrypted CID.
 */
export function encryptFile(file: string, filename: string, encryptedKey: Uint8Array, cid: Buffer): Promise<{
    encryptedFile: string;
    encryptedCid: string;
}>;
/**
 * Returns a transformer function that encrypts the input data using the provided key.
 * The transformer function takes in a stream of Buffer chunks and outputs a stream of encrypted Buffer chunks.
 * The encryption is done using the XChaCha20-Poly1305 algorithm.
 * The input data is split into chunks of size 262144 bytes (256 KB) and each chunk is encrypted separately.
 * @param {Buffer} key The encryption key to use.
 * @returns {TransformStream} A Transform stream that takes in Buffer chunks and outputs encrypted Buffer chunks.
 */
export function getTransformerEncrypt(key: Buffer): TransformStream;
import { Buffer } from "buffer";
//# sourceMappingURL=encryptWasm-nodejs.d.ts.map