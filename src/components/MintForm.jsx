import { useState, useRef } from 'react';
import CreateSteps from './CreateSteps.jsx';
import {
  UploadCloudIcon, HighQualityIcon, UniqueIcon, DescIcon, CollectionTipIcon, EthLogoIcon, InfoDot,
} from './CreatePageIcons.jsx';

const PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

export default function MintForm({ contract, account, onMinted, auth }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | uploading | minting | success | error
  const [txHash, setTxHash] = useState(null);
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const uploadToPinata = async (data, isFile) => {
    const formData = new FormData();
    if (isFile) {
      formData.append('file', data);
    } else {
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      formData.append('file', blob, 'metadata.json');
    }
    const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: { Authorization: `Bearer ${PINATA_JWT}` },
      body: formData,
    });
    if (!res.ok) throw new Error('Pinata upload failed');
    const result = await res.json();
    return `ipfs://${result.IpfsHash}`;
  };
const handleMint = async (e) => {
  e.preventDefault();

  if (!auth?.isSignedIn) {
    setStatus('error');
    setErrorMessage('You must sign in before minting.');
    return;
  }

  if (!contract || !account || !file || !name) {
    setStatus('error');
    setErrorMessage('Please connect your wallet and fill in all required fields.');
    return;
  }

  try {
    setStatus('uploading');
    setErrorMessage(null);
    const imageURI = await uploadToPinata(file, true);

    const metadata = { name, description, image: imageURI, external_url: externalLink || undefined };
    const metadataURI = await uploadToPinata(metadata, false);

    setStatus('minting');
    const tx = await contract.mintNFT(account, metadataURI);
    const receipt = await tx.wait();

    setTxHash(receipt.hash);
    setStatus('success');
    if (onMinted) onMinted();
  } catch (err) {
    console.error(err);
    setStatus('error');
    setErrorMessage('Something went wrong. Please try again.');
  }

    try {
      setStatus('uploading');
      const imageURI = await uploadToPinata(file, true);

      const metadata = { name, description, image: imageURI, external_url: externalLink || undefined };
      const metadataURI = await uploadToPinata(metadata, false);

      setStatus('minting');
      const tx = await contract.mintNFT(account, metadataURI);
      const receipt = await tx.wait();

      setTxHash(receipt.hash);
      setStatus('success');
      if (onMinted) onMinted();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const busy = status === 'uploading' || status === 'minting';

  return (
    <div>
      <div className="create-header">
        <div>
          <h1>Create NFT</h1>
          <p>Transform your digital creation into an NFT on the blockchain.</p>
        </div>
        <button className="save-draft-btn">📄 Save as Draft</button>
      </div>

      <CreateSteps current={1} />

      <form onSubmit={handleMint} className="create-layout">
        <div className="create-main">
          {/* Upload */}
          <div className="create-section">
            <h3>1. Upload Your Asset</h3>
            <p className="create-section-sub">Supported file types: JPG, PNG, GIF, MP4, WEBM, GLB. Max size: 100MB</p>

            <div
              className={`upload-dropzone ${dragOver ? 'drag-over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              {preview ? (
                <img src={preview} alt="Preview" className="upload-preview-thumb" />
              ) : (
                <>
                  <UploadCloudIcon />
                  <p className="upload-drop-text">Drag and drop your file here</p>
                  <p className="upload-or">or</p>
                </>
              )}
              <button type="button" className="btn-primary" onClick={() => fileInputRef.current.click()}>
                {preview ? 'Change File' : 'Choose File'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            <div className="upload-guidelines">
              <h4>Upload Guidelines</h4>
              <ul>
                <li>Use high-resolution files for the best quality</li>
                <li>Square images work best (1:1 ratio)</li>
                <li>Video: max 30 seconds recommended</li>
                <li>3D models should be optimized</li>
              </ul>
            </div>
          </div>

          {/* Details */}
          <div className="create-section">
            <h3>2. Add Details</h3>

            <label className="create-field">
              Name <span className="required">*</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name for your NFT"
                maxLength={80}
              />
              <span className="field-counter">{name.length}/80</span>
            </label>

            <label className="create-field">
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your NFT, its story, or what makes it unique..."
                rows={4}
                maxLength={1000}
              />
              <span className="field-counter">{description.length}/1000</span>
            </label>

            <label className="create-field">
              External Link <InfoDot />
              <input
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
                placeholder="https://yoursite.com (optional)"
              />
            </label>

            <label className="create-field">
              <div className="field-label-row">
                Collection <InfoDot />
                <a href="#" className="create-collection-link">Create new collection</a>
              </div>
              <select defaultValue="">
                <option value="" disabled>Select collection</option>
                <option>My First Collection</option>
              </select>
            </label>
          </div>

          <div className="create-actions-row">
            <button type="button" className="btn-outline">Cancel</button>
            <button type="submit" className="btn-primary" disabled={busy || !auth?.isSignedIn}>
  {status === 'uploading' && 'Uploading to IPFS...'}
  {status === 'minting' && 'Minting...'}
  {(status === 'idle' || status === 'error') && <>Continue {'\u2192'}</>}
  {status === 'success' && 'Minted!'}
</button>
          </div>

          {status === 'success' && (
            <p className="form-success">
              Success! View on{' '}
              <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">Etherscan</a>
            </p>
          )}
          {status === 'error' && <p className="form-error">{errorMessage}</p>}
        </div>

        <aside className="create-sidebar">
          <div className="panel">
            <h3>Preview</h3>
            <div className="create-preview-card">
              <div className="create-preview-image">
                {preview ? <img src={preview} alt="" /> : <div className="create-preview-empty" />}
              </div>
              <div className="create-preview-info">
                <div className="create-preview-name">{name || 'Your NFT Name'}</div>
                <div className="create-preview-owner">by <span>YourName</span> ✓</div>
                <div className="create-preview-price">-- ETH <span className="not-listed">Not listed</span></div>
              </div>
            </div>
          </div>

          <div className="panel">
            <h3>Creation Tips</h3>
            <div className="tip-row"><span className="tip-icon"><HighQualityIcon /></span><div><strong>High Quality</strong><p>Use high-resolution images and videos.</p></div></div>
            <div className="tip-row"><span className="tip-icon"><UniqueIcon /></span><div><strong>Unique Content</strong><p>Make sure your content is original.</p></div></div>
            <div className="tip-row"><span className="tip-icon"><DescIcon /></span><div><strong>Clear Description</strong><p>Add a detailed description to attract buyers.</p></div></div>
            <div className="tip-row"><span className="tip-icon"><CollectionTipIcon /></span><div><strong>Right Collection</strong><p>Choose the right collection for better visibility.</p></div></div>
            <a href="#" className="tip-learnmore">Learn more about creating NFTs {'\u2197'}</a>
          </div>

          <div className="panel">
            <h3>Network &amp; Fees</h3>
            <div className="fee-row">
              <span className="fee-label"><EthLogoIcon /> Ethereum</span>
              <span className="fee-network-badge">● Mainnet</span>
            </div>
            <div className="fee-row">
              <span className="fee-label">Estimated Gas Fee <InfoDot /></span>
              <span className="fee-value">~0.003 ETH<br /><small>$5.21</small></span>
            </div>
            <div className="fee-row">
              <span className="fee-label">Service Fee <InfoDot /></span>
              <span className="fee-value">2.5%</span>
            </div>
            <p className="fee-note">You&apos;ll pay gas fees when your NFT is minted.</p>
          </div>
        </aside>
      </form>
    </div>
  );
}